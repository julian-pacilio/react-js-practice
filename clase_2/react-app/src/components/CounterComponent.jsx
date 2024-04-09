import React from "react"

class Counter extends React.Component {

    constructor(props) {
        super(props)
        this.increment = this.increment.bind(this)
    }

    state = {
        counter : Number(this.props.value) // parseInt(this.props.value)
    }

    increment() {
        this.setState({ counter: this.state.counter + 1 })
    }

    decrement() {
        this.setState({ counter: this.state.counter - 1 })
    }

    render() {

        let { id } = this.props
        let { counter } = this.state

        return(
            <div className="counter">
                <h3 className="text-3xl font-bold">Contador { id }</h3>
                <hr className="my-3" />
                <div className="flex gap-6 justify-center">
                    <button onClick={() => this.decrement()}>[ - ]</button>
                    <span className="inline-block">{ counter }</span>
                    <button onClick={this.increment}>[ + ]</button>

                    {/* 
                        // Para forzar el cambio de estado de un elemeto, podriamos usar el metodo "forceUpdate"

                        <button onClick={() => { 
                            this.state.counter = this.state.counter + 1
                            this.forceUpdate() 
                        }} >[ + ]</button>
                    */}
                </div>
            </div>
        )
    }
}

export default Counter

// state
// Dentro de la propiedad "state" se almacenan todas las props de un objeto la cual queremos que se conserven. Todo lo que se modifique en el state, dispara nuevamente al render