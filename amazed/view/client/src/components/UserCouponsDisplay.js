import './UserCoupons.css';

const UserCouponsDisplay = (props) => {

    const renderStatus = (data, id) => {
        let userEmail = sessionStorage.getItem('loggedInEmail');
        if(data.includes(userEmail)) {
            return (
                <>
                    <p className="status"><b>Status:</b> Already Used</p>
                    {/* <button className="cdelete" value={id} onClick={props.delete}>
                        Delete
                    </button> */}
                </>
            );
        }else {
            return (
                <p className="status"><b>Status:</b> Not Used</p>
            );
        }
    }
    
    const renderCoupons = (data) => {
        if(data && data.length > 0) {
            return data.map(item => {
                return (
                    <div className="coupon">
                        <img src="/images/coupon.jpg" alt="coupon-icon"></img>

                        <div className="details">
                            <p className="ctitle">Discount of <b>{item.discountPercent}%</b> on any {item.category} product</p>
                            <p><b>Name:</b> {item.couponName}</p>
                            <p><b>Code:</b> {item.couponCode}</p>
                            {renderStatus(item.usedBy, item._id)}
                            
                        </div>
                    </div>
                );
            })
        }
    }

    return (
        <div className="container coupon-card">
            { renderCoupons(props.coupons) }
        </div>
    );
}

export default UserCouponsDisplay;