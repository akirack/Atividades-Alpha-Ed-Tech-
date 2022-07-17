import * as routes from './modules/routes.js';

function simulateClick() {
    const event = new MouseEvent('click', {
      view: window,
      bubbles: true,
      cancelable: true
    });
    const cb = document.getElementById('checkbox');
    const cancelled = !cb.dispatchEvent(event);
  
    if (cancelled) {
      // A handler called preventDefault.
      alert("cancelled");
    } else {
      // None of the handlers called preventDefault.
      alert("not cancelled");
    }
  }
  

















// function select(id) {
//     document.querySelectorAll(".route").forEach(item => item.classList.remove('selected'));
//     document.querySelectorAll("#" + id).forEach(item => item.classList.add('selected'));
// }

// function loadContent(id) {
//     console.log("Loading content for {" + id + "}");
//     document.querySelector("#content").innerHTML = 'Content loading for /' + id + '...';
// }

// function push(event) {
//     let id = event.target.id;
//     select(id);
//     document.title = id;
//     loadContent(id);
//     window.history.pushState({id}, `${id}`,`/page/${id}`);
// }

// window.onload = event => {
//     window["index"].addEventListener("click", event => push(event))
//     window["brigadeiros"].addEventListener("click", event => push(event))
//     window["cupcakes"].addEventListener("click", event => push(event))
//     window["doces"].addEventListener("click", event => push(event))
// }

// window.addEventListener("popstate", event => {
//     let stateId = event.state.id;
//     console.log("stateId = ", stateId);
//     select(stateId);
//     loadContent(stateId);
// });
