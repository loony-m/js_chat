class Form {
    constructor({ el, onSubmit }) {
        this.el = el;
        this._initEvents();
        this.cb = onSubmit;
    }
    render() {
        this.el.innerHTML = `
            <form class="form">
                <textarea name="message"></textarea>
                <br>
                <input type="submit" value="send messages">
            </form>
        `;
    }

    _initEvents() {
        this.el.addEventListener('submit', this._onSubmit.bind(this));
    }

    _onSubmit(event) {
        const el = event.target;
        const message = el.querySelector('[name="message"]').value;
        event.preventDefault();
        this.cb(message);
        el.reset();
    }
}