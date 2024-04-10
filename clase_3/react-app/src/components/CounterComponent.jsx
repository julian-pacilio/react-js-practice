import React from "react"

class Counter extends React.Component {

    constructor(props) {
        super(props)
        //this.increment = this.increment.bind(this)
    }

    state = {
        counter : Number(this.props.value1),
        counter2 : Number(this.props.value2)
    }

    sendData() {
        let { counter, counter2 } = this.state
        let { id, sendValue } = this.props
        let data = { 
            id,       
            counter,    
            counter2  
        }
        sendValue(data)
    }

    increment(number) {

        if( number === 1 ) {
            this.setState( prevstate => ({ counter: prevstate.counter + 1 }), this.sendData)

        } 
        else if ( number === 2 ) {
            this.setState( prevstate => ({ counter2: prevstate.counter2 + 1 }), this.sendData)
        }
    }

    decrement(number) {

        if( number == 1 ) {
            this.setState({ counter: this.state.counter - 1 })

        } 
        else if ( number == 2 ) {
            this.setState({ counter2: this.state.counter2 - 1 })
        }
    }

    // increment1() {
    //     this.setState( prevstate => ({ counter: prevstate.counter + 1 }), this.sendData)
    // }

    // increment2() {
    //     this.setState( prevstate => ({ counter2: prevstate.counter2 + 1 }), this.sendData)
    // }

    // decrement1() {
    //     this.setState({ counter: this.state.counter - 1 })
    // }

    // decrement2() {
    //     this.setState({ counter2: this.state.counter2 - 1 })
    // }

    render() {

        let { id } = this.props
        let { counter, counter2 } = this.state

        return(
            <div className="counter">
                <h3 className="text-3xl font-bold">Contador { id }</h3>
                <hr className="my-3" />
                <div className="flex gap-6 justify-center mb-6">
                    {/* <button onClick={() => this.decrement1()}>[ - ]</button> */}
                    <button onClick={() => this.decrement(1)}>[ - ]</button>
                        <span className="inline-block">{ counter }</span>
                    {/* <button onClick={() => this.increment1()}>[ + ]</button> */}
                    <button onClick={() => this.increment(1)}>[ + ]</button>
                </div>
                <div className="flex gap-6 justify-center">
                    {/* <button onClick={() => this.decrement2()}>[ - ]</button> */}
                    <button onClick={() => this.decrement(2)}>[ - ]</button>
                        <span className="inline-block">{ counter2 }</span>
                    <button onClick={() => this.increment(2)}>[ + ]</button>
                    {/* <button onClick={() => this.increment2()}>[ + ]</button> */}
                </div>
            </div>
        )
    }
}

export default Counter