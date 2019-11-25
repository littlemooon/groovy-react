def h(String tag, Map props, Closure createChildren) {
  React.createElement.apply(React, [tag, props, createChildren()])
}

def div(Map props, Closure createChildren) {
  h('div', props, createChildren)
}

def button(Map props, Closure createChildren) {
  h(Button, props, createChildren)
}

def GroovyComponent() {
  div([style: [padding: '10px', background: 'seagreen']]) {
    button([style: [color: 'tomato']]) {
      'This is the same React button rendered in Groovy'
    }
  }
}

module.exports = GroovyComponent
