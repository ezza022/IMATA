import React from "react";
import Title from "../../../components/atom/Title";

export default function AboutTemp() {
  return (
    <div className="about container p-8 space-y-5 lg:space-y-16">
      <Title title="Tentang Kami"/>
      <div className="content lg:space-x-20 lg:flex-row flex flex-col-reverse justify-center items-center">
        <p className="mt-5 lg:mt-0">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia hic
          consequatur mollitia nihil veritatis quos dolor perferendis
          consectetur error, nam repellat numquam libero deleniti nostrum, eius
          iusto dicta ducimus consequuntur! Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Nulla, temporibus. Facere, explicabo?
          Aliquam fugiat magni assumenda maxime ea animi repellendus, accusamus
          iste laudantium voluptas omnis porro est possimus iure repellat.
        </p>
        <img
          className='mx-auto border-4 rounded-md border-solid border-white'
          src="https://lh5.googleusercontent.com/proxy/YeCIF1FnNB4K4qurZOo7WzngEET35VSnqOp2sfgwiWLoRipOCdWr7lLTb5uU05HhctbilaYWTtBNiFXsNftuAxjErwwrEwK7w0PGBrXBpQZgullEqLVBhaCLiUY=w1200-h630-p-k-no-nu"
          alt="a"
          width="300px"
        />
      </div>
    </div>
  );
}
