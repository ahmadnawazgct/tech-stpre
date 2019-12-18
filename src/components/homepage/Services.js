import React from 'react';
import { FaDolly,FaDollarSign, FaRedo } from 'react-icons/fa';
import styled from 'styled-components';

class Services extends React.Component {
    state = {
        services:[
            {
                id:1,
                icon:<FaDolly />,
                title:"free shipping",
                text:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs"
            },
            {
                id:2,
                icon:<FaDollarSign />,
                title:"secured payment",
                text:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs"
            },
            {
                id:3,
                icon:<FaRedo />,
                title:"30 day return policy",
                text:"Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs"
            }
        ]
    }
    render() {
        return(
            <ServicesWrapper className="my-5">
                <div className="container">
                    <div className="row">
                        {this.state.services.map(item=>{
                            return<div className="col-10 mx-auto col-sm-6 col-md-4 text-center my-3" key={item.id}>
                                    <div className="services-icon">{item.icon}</div>
                                    <div className="mt-3 text-capitalize">{item.title}</div>
                                    <div className="mt-3">{item.text}</div>
                                </div>
                            })}
                    </div>
                </div>
            </ServicesWrapper>

        );
    }
}
const ServicesWrapper = styled.section`
    background:rgba(95,183, 234,0.3);
    .services-icon{
        font-size:2.5rem;
        color:var(--primaryColor);
    }
    p{
        colro:var(--darkGrey);
    }


`;
export default Services;