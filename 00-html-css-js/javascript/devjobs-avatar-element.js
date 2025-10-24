class DevJobsAvatar extends HTMLElement {
    constructor(){
        super();

        this.attachShadow({ mode:'open' })
    }

    render(){
        this.shadowRoot.innerHTML = `
            <style>
                img{
                    border: 2px solid var(--primary-dark);
                }
            </style>
            <img 
                src="https://avatars.githubusercontent.com/u/108992007?v=4"
                alt="avatar de Gnomono"
                class="avatar"
                style="width:40px; height:40px; border-radius:50%"
            />
        `
    }

    connectedCallback(){
        this.render();
    }
}

customElements.define('devjobs-avatar', DevJobsAvatar);