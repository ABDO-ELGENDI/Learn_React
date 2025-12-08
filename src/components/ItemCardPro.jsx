import '../materialize.min.css'
import { useQuery } from '@tanstack/react-query'

function ItemCardPro() {
    const { data, isLoading, isError, error } = useQuery({
        queryKey: ['testquery'],
        queryFn: async () => {
            const response = await fetch("http://localhost:3000/api/items");
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            //console.log(response.json());
            return response.json();
        },
        
    });
    if (isLoading) return <div>Loading...</div>;
    if (isError) return <div>Error: {error.message}</div>;
    //console.log(data);
    return (//keep the open ( with the same line with return for no errors
        // <div>only render one item so don't return data.map
        <div className="row">
        {
            data.map((item) => (
                <div>
                    <div className="col s12 m6">
                        <div className="card">
                            <div className="card-image">
                                <img src="../../public/sample-1.jpg" />{/*image here has a close /> */}
                                <span className="card-title">{item?.name}</span>
                                <a className="btn-floating halfway-fab waves-effect waves-light red"><i className="material-icons">add</i></a>
                            </div>
                            <div className="card-content">
                                <p>{item?.quantity}</p>
                            </div>
                        </div>
                    </div>
                </div>
            ))
        }
        </div>
    );
}

export default ItemCardPro