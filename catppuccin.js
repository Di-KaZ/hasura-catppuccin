// add class
// cm-s-ctp-macchiato
const script = `
function waitForElm(selector) {
  return new Promise((resolve) => {
    const elm = document.querySelector(
      selector
    );
    if (elm && elm.CodeMirror) {
      return resolve(elm);
    }

    const observer = new MutationObserver((mutations) => {
      const elm = document.querySelector(
        selector
      );
      if (elm && elm.CodeMirror) {
        resolve(elm);
        observer.disconnect();
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

waitForElm("div.CodeMirror.cm-s-graphiql").then((elm) => {
  elm.CodeMirror.setOption("theme", "ctp-macchiato");
});

waitForElm("#apiRequestBlock > div > div > div > div > div.graphiql-container > div.editorWrap > div.editorBar > div.resultWrap > section > div").then((elm) => {
    console.log(elm);
    elm.CodeMirror.setOption("theme", "ctp-macchiato");
});

waitForElm("#apiRequestBlock > div > div > div > div > div.graphiql-container > div.editorWrap > div.editorBar > div.queryWrap > section.variable-editor > div.codemirrorWrap > div").then((elm) => {
    console.log(elm);
    elm.CodeMirror.setOption("theme", "ctp-macchiato");
});


`;
document.body.appendChild(document.createElement("script")).innerHTML = script;
