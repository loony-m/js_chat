export class Form {
    constructor({ el, onSubmit }) {
        this.el = el;

        this.el.addEventListener('submit', this._onSubmit.bind(this));
        this.onSubmit = onSubmit;
    }
    render() {
        this.el.innerHTML = `
            <form class="form">
                <textarea name="message"></textarea>
                <input type="submit" value="Отправить">
            </form>
        `;
    }

    _onSubmit(event) {
        event.preventDefault();
        this.onSubmit({
            text: event.target.querySelector('textarea').value
        })
    }
}