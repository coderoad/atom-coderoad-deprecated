import * as React from 'react';

const styles = {
  editor: {
    textAlign: 'left',
    border: '2px solid red',
    margin: '5px',
    borderRadius: '3px',
  },
};

export default class TextEditor extends React.Component<{
  name: string
}, {}> {
  componentDidMount() {
    const ed = atom.workspace.buildTextEditor();
    ed.setGrammar(
      atom.grammars.grammarForScopeName('source.js')
    );
    console.log(ed);
    // ed.style.textAlign = 'left';
    ed.setText('var a = 42;');
    document.querySelector(`#${this.props.name}`).appendChild(ed.getElement());
  }
  render() {
    return <div id={this.props.name} style={styles.editor} />;
  }
}
