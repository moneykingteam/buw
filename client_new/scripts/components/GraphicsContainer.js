define([
    'react',
    'react-dom',
    'lodash',
    'components/ChromeBugHack',
    'components/GraphicDisplay',
    'components/TextDisplay',
    'game-logic/GameEngineStore',
    'game-logic/clib',
    'stores/GameSettingsStore',
    'lang/lang'
], function(
    React,
    ReactDOM,
    _,
    ChromeBugHack,
    GraphicDisplayClass,
    TextDisplayClass,
    GameEngineStore,
    Clib,
    GameSettingsStore,
    t
){

    var D = React.DOM;

    var GraphicDisplay = React.createFactory(GraphicDisplayClass);
    var TextDisplay = React.createFactory(TextDisplayClass);
    var ChromeBugHack = React.createFactory(ChromeBugHack);

    function getState(){
        return _.merge(
            _.pick(GameSettingsStore.getState(), ['graphMode', 'currentTheme']),
            _.pick(GameEngineStore, ['nyan', 'connectionState', 'maxWin', 'tableHistory']),
            {devicePixelRatio: window.devicePixelRatio || 1}
        );
    }

    function o(e, t) { 
        return e === t - 3 ? .7 : e === t - 2 ? .5 : e === t - 1 ? .25 : 1 
    }

    return React.createClass({
        displayName: 'GraphicsContainer',

        propTypes: {
            isMobileOrSmall: React.PropTypes.bool.isRequired,
            controlsSize: React.PropTypes.string.isRequired
        },

        getInitialState: function () {
            var state = getState();
            state.width  = 0;
            state.height = 0;
            return state;
        },

        resizeAnimReq: null,
        onWindowResize: function() {
            var self = this;
            self.resizeAnimRequest = window.requestAnimationFrame(function(){
                var domNode = ReactDOM.findDOMNode(self);
                self.setState(_.merge(getState(), {
                    width: domNode.clientWidth,
                    height: domNode.clientHeight*0.95
                }));
            });
        },

        componentDidMount: function() {
            GameEngineStore.on({
                joined: this._onChange,
                disconnected: this._onChange,
                game_started: this._onChange,
                game_crash: this._onChange,
                game_starting: this._onChange,
                lag_change: this._onChange,
                nyan_cat_animation: this._onNyanAnim
            });
            GameSettingsStore.addChangeListener(this._onChange);
            window.addEventListener('resize', this.onWindowResize);

            document.addEventListener('visibilitychange', this._onVisibilityChange);



            // Call the resize handler once to setup the initial geometry of the
            // canvas displays.
            this.onWindowResize();
        },

        componentWillUnmount: function() {
            GameEngineStore.off({
                joined: this._onChange,
                disconnected: this._onChange,
                game_started: this._onChange,
                game_crash: this._onChange,
                game_starting: this._onChange,
                lag_change: this._onChange,
                nyan_cat_animation: this._onNyanAnim
            });
            GameSettingsStore.removeChangeListener(this._onChange);
            window.removeEventListener('resize', this.onWindowResize);
            window.cancelAnimationFrame(this.resizeAnimReq);

            document.removeEventListener('visibilitychange', this._onVisibilityChange);
        },

        _onChange: function() {
            if(this.isMounted())
                this.setState(getState());
        },

        _onVisibilityChange: function() {
           if (!this.isMounted()) return;

            this.setState({chromeHack: true});
        },

        _removeChromeHack: function() {
            if (!this.isMounted()) return;
            this.setState({chromeHack: false});
        },

        componentDidUpdate: function(prevProps, prevState) {
            // Detect changes on the controls size to trigger a window resize to
            // resize the canvas of the graphics display.
            if(this.props.controlsSize !== prevProps.controlsSize)
                this.onWindowResize();
        },

        _onNyanAnim: function() {
            this.setState({ nyan: true });
        },

        render: function() {
            var display;

            if (this.state.chromeHack)
                display = ChromeBugHack({ onMount: this._removeChromeHack });
            else if (this.state.graphMode === 'text')
                display = TextDisplay();
            else
                display = GraphicDisplay(_.merge(
                    {controlsSize: this.props.controlsSize},
                    _.pick(this.state, [
                      'currentTheme',
                      'width',
                      'height',
                      'devicePixelRatio'
                    ])
                ));

            //Connection message
            var connectionMessage;
            switch(this.state.connectionState) {
                case 'CONNECTING':
                    connectionMessage = t.T('Connecting...');
                    break;
                case 'DISCONNECTED':
                    connectionMessage = t.T('Connection Lost ...');
                    break;
                default:
                    connectionMessage = null;
            }
            
            var h = this.state.width <= 320 ? 5 : 7;
            var previous = this.state.tableHistory.slice(0, h).map(function(game, i) {
                var r = o(i, h);
                if (game.game_crash >= 198)
                    className = 'games-log-goodcrash';
                else if (game.game_crash <= 196)
                    className = 'games-log-badcrash';
                else
                    className = '';

                return D.div({ key: 'game_' + i, 
                    style: { float: "left", opacity: r, width: (99 / h).toFixed(2) + "%" } }, 
                    D.a({ href: '/game/' + game.game_id, target: '_blank', className: className }, 
                        Clib.formatSatoshis(game.game_crash), 
                        D.i(null, 'x')
                    )
                );
            })


            return D.div({ id: 'chart-inner-container', className: this.props.controlsSize, ref: 'container' },
                D.div({ className: 'anim-cont' },
                    D.div({ className: 'nyan' + (this.state.nyan? ' show' : '') },
                        this.state.nyan? D.img({ src: '/img/nyan.gif' }) : null
                    )
                ),
                D.div({ className: 'max-profit' },
                    t.T('Max profit: '), (this.state.maxWin/1e8).toFixed(4), ' BTC'
                ),
                display,
                D.div({ className: 'connection-state' },
                    connectionMessage
                ),
                D.div({ style: { "text-align": "center" }}, 
                    previous
                )
            );
        }
    });
});