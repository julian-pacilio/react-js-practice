export default function MessageComponent(props) 
{

    // let color = props.color;
    // let message = props.message;

    // Destructuring Object (ECMA Script)
    let { color, message } = props;

    return (
        <div className="container mt-6 mx-auto">
            <div className="text-white p-3 rounded-lg" 
                    style={{ backgroundColor: color }}>
                <h3 className="text-3xl font-bold">{ message != null ? message : 'Default' }</h3>  
                <hr className="my-3"/>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit magni dicta eum? Officia modi voluptate ex laborum, sequi porro, earum illum minima dicta velit accusantium!
                </p>
                <span className="block text-right">{ new Date().toLocaleString()}</span>
            </div>
      </div>
    )
}
