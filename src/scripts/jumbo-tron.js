class JumboTron extends HTMLElement {
    connectedCallback(){
        this.render();
    }
  
    render() {
        this.innerHTML = `
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 class="display-4">Let's Try<br>Our<br> Chicken Food Recipes</h1>
                <a href="#listSection" class="btn btn-info btn-lg tombol">View recipes</a>
            </div>
        </div>
        `;
    }
 }
  
customElements.define("jumbo-tron", JumboTron);