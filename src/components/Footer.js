import React from 'react';
import styled from 'styled-components';
import { ProductConsumer} from '../context';
const Footer =() => {
    return(
        <ProductConsumer>
            {value => {
                return<FootWrapper>
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6">
                                <p className="text-capitalize my-3">
                                    copyright &copy; tech store{new Date().getFullYear()} all right reserved
                                </p>
                            </div>
                            <div className="col-md-6 d-flex justify-content-around my-3">
                                { value.socialLinks.map(item=> (
                                    <a href={item.url} key={item.id}>{item.icon}</a>
                                ))}
                            </div>
                            <div className="col-md-6">
                                <p></p>
                            </div>
                        </div>
                    </div>
                    </FootWrapper>
            }}
        </ProductConsumer>
        
    )
};
const FootWrapper = styled.footer`
    background:var(--darkGrey);
    color:var(--mainWhite);
    .icon{
        font-size:1.5rem;
        color:var(--mainWhite);
        tranisition:var(--mainTransition);
        .icon:hover{
            color:var(--primaryColor);
            cursor:pointer;
        }
    }
`;
export default Footer;