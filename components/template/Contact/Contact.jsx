const Contact = () => {
  return (
    <div className="container">
      <div
        className="Contact mt-28 mb-28  max-w-[900px] m-auto max-[768px]:max-w-[100%]"
        id="Contact"
      >
        <div className="content-work flex justify-between  gap-[100px] max-[992px]:gap-[50px] max-[768px]:flex-col max-[768px]:items-center">
          <div className="title text-[22px] font-bold max-[768px]:text-[25px]">
            <h1 className="max-[992px]:w-[100px] max-[768px]:w-[100%]">ارتباط با من</h1>
          </div>
          <div className="contact flex flex-wrap gap-16 w-[700px] max-[768px]:w-[100%] max-[768px]:justify-center">
            <h1 className="max-[768px]:text-center"> تلفون : 09339790644</h1>
            <h1 className="max-[768px]:text-center"> ایمیل : kakh.sajad@gmail.com</h1>
            <h1 className="max-[768px]:text-center"> اینستاگرام : sajad.hk_</h1>
            <h1 className="max-[768px]:text-center"> گیت هاب : github/hksajad</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
