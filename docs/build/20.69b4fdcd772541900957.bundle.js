webpackJsonp([20],{503:function(e,a,t){"use strict";function l(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}function n(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!=typeof a&&"function"!=typeof a?e:a}function s(e,a){if("function"!=typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}Object.defineProperty(a,"__esModule",{value:!0});var r=function(){function e(e,a){for(var t=0;t<a.length;t++){var l=a[t];l.enumerable=l.enumerable||!1,l.configurable=!0,"value"in l&&(l.writable=!0),Object.defineProperty(e,l.key,l)}}return function(a,t,l){return t&&e(a.prototype,t),l&&e(a,l),a}}(),c=t(1),u=function(e){return e&&e.__esModule?e:{default:e}}(c),m=t(237),d=function(e){function a(e){l(this,a);var t=n(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.state={city:null,city2:null},t}return s(a,e),r(a,[{key:"render",value:function(){var e=this;return u.default.createElement("div",null,u.default.createElement(m.RadioGroup,{name:"city",value:this.state.city,onChange:function(a){return e.setState({city:a})}},u.default.createElement(m.Radio,{value:1},"广州"),u.default.createElement(m.Radio,{value:2},"深圳")),u.default.createElement("hr",null),u.default.createElement(m.RadioGroup,{name:"city2",inline:!0,value:this.state.city2,onChange:function(a){return e.setState({city2:a})}},u.default.createElement(m.Radio,{value:1},"广州"),u.default.createElement(m.Radio,{value:2},"深圳")))}}]),a}(u.default.Component),f=function(e){function a(e){l(this,a);var t=n(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.state={},t}return s(a,e),r(a,[{key:"handleToggleCode",value:function(e){var a={};a["showCode"+e]=!this.state["showCode"+e],this.setState(a)}},{key:"render",value:function(){return u.default.createElement("div",{className:"doc"},u.default.createElement("h2",{id:"radio"},u.default.createElement("a",{className:"header-anchor",href:"#radio","aria-hidden":"true"},"¶")," Radio"),u.default.createElement("p",null,"配合",u.default.createElement("code",null,"RadioGroup"),"一起用，onChange返回的是原始值，非原始radio组件的字符串值"),u.default.createElement("div",{className:"doc-demo-box "+(this.state.showCode6?"doc-demo-code-active":"")},u.default.createElement("div",{className:"doc-demo-instance"},u.default.createElement("h4",null,"Example"),u.default.createElement(d,null)),u.default.createElement("div",{className:"doc-demo-meta"},u.default.createElement("div",{className:"doc-demo-code"},u.default.createElement("pre",null,u.default.createElement("code",{className:"language-js"},u.default.createElement("span",{className:"hljs-class"},u.default.createElement("span",{className:"hljs-keyword"},"class")," ",u.default.createElement("span",{className:"hljs-title"},"RadioWrap")," ",u.default.createElement("span",{className:"hljs-keyword"},"extends")," ",u.default.createElement("span",{className:"hljs-title"},"React"),".",u.default.createElement("span",{className:"hljs-title"},"Component")," "),"{",u.default.createElement("br",null),"    ",u.default.createElement("span",{className:"hljs-keyword"},"constructor"),"(props)","{",u.default.createElement("br",null),"        ",u.default.createElement("span",{className:"hljs-keyword"},"super"),"(props);",u.default.createElement("br",null),"        ",u.default.createElement("span",{className:"hljs-keyword"},"this"),".state = ","{",u.default.createElement("br",null),"            ",u.default.createElement("span",{className:"hljs-attr"},"city"),": ",u.default.createElement("span",{className:"hljs-literal"},"null"),",",u.default.createElement("br",null),"            ",u.default.createElement("span",{className:"hljs-attr"},"city2"),": ",u.default.createElement("span",{className:"hljs-literal"},"null"),u.default.createElement("br",null),"        ","}",";",u.default.createElement("br",null),"    ","}",u.default.createElement("br",null),"    ",u.default.createElement("br",null),"    render() ","{",u.default.createElement("br",null),"        ",u.default.createElement("span",{className:"hljs-keyword"},"return")," (",u.default.createElement("br",null),"            ",u.default.createElement("span",{className:"xml"},u.default.createElement("span",{className:"hljs-tag"},"<",u.default.createElement("span",{className:"hljs-name"},"div"),">"),u.default.createElement("br",null),"                ",u.default.createElement("span",{className:"hljs-tag"},"<",u.default.createElement("span",{className:"hljs-name"},"RadioGroup")," ",u.default.createElement("span",{className:"hljs-attr"},"name"),"=",u.default.createElement("span",{className:"hljs-string"},'"city"')," ",u.default.createElement("span",{className:"hljs-attr"},"value"),"=",u.default.createElement("span",{className:"hljs-string"},"{","this.state.city","}")," ",u.default.createElement("span",{className:"hljs-attr"},"onChange"),"=",u.default.createElement("span",{className:"hljs-string"},"{","v")," =>")," this.setState(","{","city: v","}",")","}",">",u.default.createElement("br",null),"                    ",u.default.createElement("span",{className:"hljs-tag"},"<",u.default.createElement("span",{className:"hljs-name"},"Radio")," ",u.default.createElement("span",{className:"hljs-attr"},"value"),"=",u.default.createElement("span",{className:"hljs-string"},"{","1","}"),">"),"广州",u.default.createElement("span",{className:"hljs-tag"},"</",u.default.createElement("span",{className:"hljs-name"},"Radio"),">"),u.default.createElement("br",null),"                    ",u.default.createElement("span",{className:"hljs-tag"},"<",u.default.createElement("span",{className:"hljs-name"},"Radio")," ",u.default.createElement("span",{className:"hljs-attr"},"value"),"=",u.default.createElement("span",{className:"hljs-string"},"{","2","}"),">"),"深圳",u.default.createElement("span",{className:"hljs-tag"},"</",u.default.createElement("span",{className:"hljs-name"},"Radio"),">"),u.default.createElement("br",null),"                ",u.default.createElement("span",{className:"hljs-tag"},"</",u.default.createElement("span",{className:"hljs-name"},"RadioGroup"),">"),u.default.createElement("br",null),"                ",u.default.createElement("span",{className:"hljs-tag"},"<",u.default.createElement("span",{className:"hljs-name"},"hr"),"/>"),u.default.createElement("br",null),"                ",u.default.createElement("span",{className:"hljs-tag"},"<",u.default.createElement("span",{className:"hljs-name"},"RadioGroup"),u.default.createElement("br",null),"                    ",u.default.createElement("span",{className:"hljs-attr"},"name"),"=",u.default.createElement("span",{className:"hljs-string"},'"city2"'),u.default.createElement("br",null),"                    ",u.default.createElement("span",{className:"hljs-attr"},"inline"),u.default.createElement("br",null),"                    ",u.default.createElement("span",{className:"hljs-attr"},"value"),"=",u.default.createElement("span",{className:"hljs-string"},"{","this.state.city2","}"),u.default.createElement("br",null),"                    ",u.default.createElement("span",{className:"hljs-attr"},"onChange"),"=",u.default.createElement("span",{className:"hljs-string"},"{","v")," =>")," this.setState(","{","city2: v","}",")","}",u.default.createElement("br",null),"                >",u.default.createElement("br",null),"                    ",u.default.createElement("span",{className:"hljs-tag"},"<",u.default.createElement("span",{className:"hljs-name"},"Radio")," ",u.default.createElement("span",{className:"hljs-attr"},"value"),"=",u.default.createElement("span",{className:"hljs-string"},"{","1","}"),">"),"广州",u.default.createElement("span",{className:"hljs-tag"},"</",u.default.createElement("span",{className:"hljs-name"},"Radio"),">"),u.default.createElement("br",null),"                    ",u.default.createElement("span",{className:"hljs-tag"},"<",u.default.createElement("span",{className:"hljs-name"},"Radio")," ",u.default.createElement("span",{className:"hljs-attr"},"value"),"=",u.default.createElement("span",{className:"hljs-string"},"{","2","}"),">"),"深圳",u.default.createElement("span",{className:"hljs-tag"},"</",u.default.createElement("span",{className:"hljs-name"},"Radio"),">"),u.default.createElement("br",null),"                ",u.default.createElement("span",{className:"hljs-tag"},"</",u.default.createElement("span",{className:"hljs-name"},"RadioGroup"),">"),u.default.createElement("br",null),"            ",u.default.createElement("span",{className:"hljs-tag"},"</",u.default.createElement("span",{className:"hljs-name"},"div"),">")),u.default.createElement("br",null),"        );",u.default.createElement("br",null),"    ","}",u.default.createElement("br",null),"}",u.default.createElement("br",null))),u.default.createElement("pre",null,u.default.createElement("code",{className:"language-jsx"},"<RadioWrap/>    ",u.default.createElement("br",null)))),u.default.createElement("div",{className:"doc-demo-code-btn",onClick:this.handleToggleCode.bind(this,6)},u.default.createElement("i",null)))),u.default.createElement("h3",{id:"radio-props"},u.default.createElement("a",{className:"header-anchor",href:"#radio-props","aria-hidden":"true"},"¶")," Radio Props"),u.default.createElement("ul",null,u.default.createElement("li",null,u.default.createElement("code",null,"value (any)")),u.default.createElement("li",null,u.default.createElement("code",null,"onChange (func)"))),u.default.createElement("h3",{id:"radiogroup-props"},u.default.createElement("a",{className:"header-anchor",href:"#radiogroup-props","aria-hidden":"true"},"¶")," RadioGroup Props"),u.default.createElement("ul",null,u.default.createElement("li",null,u.default.createElement("code",null,"name (string|isRequired)")),u.default.createElement("li",null,u.default.createElement("code",null,"value (any)")),u.default.createElement("li",null,u.default.createElement("code",null,"onChange (func)")),u.default.createElement("li",null,u.default.createElement("code",null,"inline (bool)")," 是否行内排列")),u.default.createElement("h2",{id:"checkbox"},u.default.createElement("a",{className:"header-anchor",href:"#checkbox","aria-hidden":"true"},"¶")," Checkbox"),u.default.createElement("p",null,"基本同Radio，区别在于",u.default.createElement("code",null,"CheckboxGroup"),"的value是个数组，onChange提供参数回来"))}}]),a}(u.default.Component);a.default=f}});