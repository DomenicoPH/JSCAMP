class DevJobsAvatar extends HTMLElement {
    constructor(){
        super();

        this.attachShadow({ mode:'open' })
    }

    createUrl(service, username){
        return `https://unavatar.io/${service}/${username}`
    }

    render(){
        const service = this.getAttribute('service') ?? 'github'
        const username = this.getAttribute('username') ?? 'Gnomono'
        const size = this.getAttribute('size') ?? '40'
        const url = this.createUrl(service, username)

        this.shadowRoot.innerHTML = `
            <style>
                img{
                    border: 2px solid var(--primary-dark);
                }
            </style>
            <img 
                src= ${url}
                onerror="this.src='https://avatars.githubusercontent.com/u/108992007?v=4'"
                alt="avatar de ${username}"
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