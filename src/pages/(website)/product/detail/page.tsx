import ProductQuery from "@/common/hooks/ProductQuery";
import { Link, useParams } from "react-router-dom";
import RelatedProduct from "../_component/RelatedProduct";
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
// Import Swiper React components

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/zoom";
const ProductDetail = () => {
    const { id } = useParams();
    const { data, isLoading } = ProductQuery(id);
    if (isLoading) return <div>Loading...</div>;

    return (
        <>
            <div>
                <section className="filters">
                    <div className="container">
                        <div className="filters-around">
                            <div className="filters-choose">
                                <div className="filters-choose__action">
                                    <span className="filters__text">Home</span>
                                    <img
                                        src="/src/assets/icons/next.svg"
                                        alt=""
                                    />
                                    <span className="filters__text">Shop</span>
                                    <img
                                        src="/src/assets/icons/next.svg"
                                        alt=""
                                    />
                                </div>

                                <div className="filters-show">
                                    <span className="filters-show__text">
                                        {data.name}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="products">
                    <div className="container">
                        <div className="products-around">
                            <div className="products-img">
                                <div className="products-img__gallery">
                                    <ul className="products-img__list">
                                        <li className="products-img__item">
                                            <img src={data.gallery[0]} alt="" />
                                        </li>
                                        <li className="products-img__item">
                                            <img src={data.gallery[1]} alt="" />
                                        </li>
                                        <li className="products-img__item">
                                            <img src={data.gallery[2]} alt="" />
                                        </li>
                                        <li className="products-img__item">
                                            <img src={data.gallery[3]} alt="" />
                                        </li>
                                    </ul>
                                </div>
                                <div className="products-img__thumbnail">
                                    <img src={data.image} alt="" />
                                </div>
                            </div>
                            <div className="products-info">
                                <h2 className="products__name">{data.name}</h2>
                                <h4 className="products__price">
                                    ${data.price}
                                </h4>
                                <div className="products-info__judge">
                                    <div className="products__star">
                                        <img
                                            src="/src/assets/icons/star.svg"
                                            alt=""
                                        />
                                        <img
                                            src="/src/assets/icons/star.svg"
                                            alt=""
                                        />
                                        <img
                                            src="/src/assets/icons/star.svg"
                                            alt=""
                                        />
                                        <img
                                            src="/src/assets/icons/star.svg"
                                            alt=""
                                        />
                                        <img
                                            src="/src/assets/icons/star-half.svg"
                                            alt=""
                                        />
                                    </div>
                                    <div className="products__review">
                                        <span>5 Customer Review</span>
                                    </div>
                                </div>
                                <div className="products-description">
                                    <p>{data.description}</p>
                                </div>
                                <div className="products-info__size">
                                    <h5 className="products__text">Size:</h5>
                                    <span className="products__size">L</span>
                                    <span className="products__size">M</span>
                                    <span className="products__size">S</span>
                                </div>
                                <div className="products-color">
                                    <h5 className="products__text">Color:</h5>
                                    <span className="products-color__violet" />
                                    <span className="products-color__black" />
                                    <span className="products-color__brown" />
                                </div>
                                <div className="products-btn">
                                    <button className="products-btn__count">
                                        <span className="minus">-</span>1
                                        <span className="plus">+</span>
                                    </button>
                                    <Link
                                        to={"/cart"}
                                        className="products__btn"
                                    >
                                        Add to cart
                                    </Link>
                                    <button className="products__btn">
                                        + Compare
                                    </button>
                                </div>
                                <hr className="hr" />
                                <div className="products-info__more">
                                    <div className="products__group">
                                        <span className="products__title">
                                            SKU
                                        </span>
                                        <span className="products__colons">
                                            :
                                        </span>
                                        <span className="products__description">
                                            SS001
                                        </span>
                                    </div>
                                    <div className="products__group">
                                        <span className="products__title">
                                            Category
                                        </span>
                                        <span className="products__colons">
                                            :
                                        </span>
                                        <span className="products__description">
                                            Sofas
                                        </span>
                                    </div>
                                    <div className="products__group">
                                        <span className="products__title">
                                            Tags
                                        </span>
                                        <span className="products__colons">
                                            :
                                        </span>
                                        <span className="products__description">
                                            Sofa, Chair, Home, Shop
                                        </span>
                                    </div>
                                    <div className="products__group">
                                        <span className="products__title">
                                            Share
                                        </span>
                                        <span className="products__colons">
                                            :
                                        </span>
                                        <span className="products__description">
                                            <img
                                                src="/src/assets/icons/fb.svg"
                                                alt=""
                                            />
                                            <img
                                                src="/src/assets/icons/linkedin.svg"
                                                alt=""
                                            />
                                            <img
                                                src="/src/assets/icons/twitter.svg"
                                                alt=""
                                            />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <hr className="hr" />
                <section className="description">
                    <div className="container">
                        <div className="description-header">
                            <div className="description-header__title">
                                <h2 className="description__title active">
                                    Description
                                </h2>
                                <h2 className="description__title">
                                    Additional Information
                                </h2>
                                <h2 className="description__title">
                                    Reviews [5]
                                </h2>
                            </div>
                            <div className="description-body">
                                <p>{data.description}</p>
                                <p>
                                    Thiết kế hiện đại: Với thiết kế thể thao
                                    hiện đại, giày Adidas UltraBoost 21 mang đến
                                    phong cách năng động và đẳng cấp. Công nghệ
                                    Boost: Sử dụng công nghệ đệm Boost độc quyền
                                    của Adidas, giày mang lại cảm giác êm ái và
                                    đàn hồi vượt trội trên mọi bước chạy. Chất
                                    liệu đa dạng: Được làm từ chất liệu vải
                                    Primeknit cao cấp, giày có khả năng co giãn
                                    và thoáng khí tốt, giúp đôi chân luôn mát mẻ
                                    và thoải mái trong mọi hoạt động. Đế ngoài
                                    Continental Rubber: Với đế ngoài được làm từ
                                    cao su chất lượng cao của Continental, giày
                                    UltraBoost 21 cung cấp độ bám và độ bền cao
                                    trên mọi bề mặt địa hình. Lớp lót OrthoLite:
                                    Sử dụng lớp lót OrthoLite, giày mang lại sự
                                    thoải mái và hỗ trợ định hình cho đôi chân
                                    suốt cả ngày dài.
                                </p>
                            </div>
                            <div className="description-image">
                                <img src={data.gallery[0]} alt="" />
                                <img src={data.gallery[2]} alt="" />
                            </div>
                        </div>
                    </div>
                </section>
                <hr className="hr" />
                <section className="product">
                    <div className="container">
                        <h1 className="related-product__title">
                            Related Product
                        </h1>
                        <RelatedProduct id={data.category._id} />
                        <div className="btn-showmore">
                            <button className="btn-showmore__action">
                                Show more
                            </button>
                        </div>
                    </div>
                </section>
                <hr className="hr" />
            </div>
        </>
    );
};

export default ProductDetail;
