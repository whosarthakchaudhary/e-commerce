import React from 'react'

export const Delivery = () => {
    return (
        <>
            <div className="row justify-content-center">
                <div className="m-3">
                    <h3> Select Payment Method</h3>
                </div>
            </div>
            <div className="container">
                <div className="m-3">
                    <form method="post">
                       
                        <div className="mt-3">
                            <label htmlFor="">DEBIT/ CREDIT CARD DETAILS</label>
                            <input type="text" name="debit" className="form-control" placeholder='Ex: xxxx xxxx xxxx xxxx' />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="">CVV</label>
                            <input type="number" name="cvv" className="form-control" placeholder='Ex: 6214' />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="">EXPIRY</label>
                            <input type="number" name="expiry" className="form-control" placeholder='Ex: 2045' />
                        </div>
                        <div className="mt-3">
                            <label htmlFor="">UPI ID</label>
                            <input type="text" name="upi" className="form-control" placeholder='Ex: abc@upi' />
                        </div>
                        <div class="dropdown mt-3">
                            <button class="btn btn-dark dropdown" type="button" data-toggle="dropdown">UPI Options
                                <span class="caret"></span></button>
                            <ul class="dropdown-menu">
                                <li><a href="#">PhonePay</a></li>
                                <li><a href="#">Paytm</a></li>
                                <li><a href="#">GPay</a></li>
                                <li><a href="#">Other UPI Options</a></li>
                            </ul>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}


