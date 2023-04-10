import styled from "styled-components";
import Product from "./components/Product";

const Products = () => {

    const Wrapper = styled.section`
        height:100vh;
        display:flex;

        .leftSide-filter{
            border:1px solid black;
            height:110vh;
            width:20%;
        }
        .rightSide-products{
            border:1px solid black;
            height:110vh;
            width:80%;
        }

    `;

    return(
        <Wrapper>
            <section className="leftSide-filter">
                <p>Left Side Filters</p>
            </section>
            <section className="rightSide-products">
                <div className="top-filter">
                    <p>Top Filters</p>
                </div>
                <div className="products-list">
                   
                </div>
            </section>
        </Wrapper>
    )


}

export default Products;