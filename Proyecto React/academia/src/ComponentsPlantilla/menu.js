import React from 'react';

class  extends Component {
    constructor(props) {
        super(props);
    }
    state = {  }
    render() { 
        return ( 
            <div>            
                <ul class="nav justify-content-center  ">
                    <li class="nav-item">
                        <a class="nav-link active" href="#" aria-current="page">Active link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Link</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link " href="#">Disabled link</a>
                    </li>
                </ul>
            </div>
            );
    }
}

export default ;