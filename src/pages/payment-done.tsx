import Image from 'next/image';

const PaymentDone = () => {
  return (
    <main className="h-screen flex items-center justify-center bg-gray-50">
        <div className="content-center flex flex-col justify-center not-[]:min-h-screen">
            <div className="">
                <Image 
                src="/images/img-payment-done.png" 
                alt="Payment Success"
                width={809}
                height={480}
                />
            </div>
            <div className="title-pay text-center mt-7 pt-4 tracking-normal">
                <h1 className="txt-title">Booking Successfully completed</h1>
                <span className="">Your trip schedule is ready,please check under profile.</span>
                <div>
                    <span>Home</span>
                </div>
            </div>      
        </div>
    </main>
  )
}

export default PaymentDone