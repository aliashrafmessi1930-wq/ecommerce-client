import React from "react";
import Container from "./Container";

const FooterTop = () => {
  const incentives = [
    {
      name: "Free shipping",
      imageSrc: "https://cdn-icons-png.flaticon.com/512/4590/4590755.png",
      description: "Fast, free delivery for all orders.",
    },
    {
      name: "10-year warranty",
      imageSrc: "https://cdn-icons-png.flaticon.com/512/1040/1040230.png",
      description: "Guaranteed quality for the next decade.",
    },
    {
      name: "Easy exchanges",
      imageSrc: "https://cdn-icons-png.flaticon.com/512/992/992703.png",
      description: "Exchange products easily within 30 days.",
    },
  ];

  return (
    <Container className="py-0">
      <div className="rounded-2xl bg-[#f6f6f6] px-6 py-16 sm:p-16">
        <div className="mx-auto max-w-xl lg:max-w-none text-center">
          <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-gray-900">
            We built our business on customer service
          </h2>
          <p className="mt-2 text-gray-500 text-sm">
            Quality, trust, and satisfaction — guaranteed for every purchase.
          </p>
        </div>

        <div className="mx-auto mt-12 grid max-w-sm grid-cols-1 gap-8 sm:max-w-none sm:grid-cols-2 lg:grid-cols-3">
          {incentives.map((item) => (
            <div
              key={item?.name}
              className="text-center bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition sm:flex sm:text-left lg:block lg:text-center"
            >
              <div className="sm:flex-shrink-0 flex justify-center sm:justify-start lg:justify-center">
                <div className="flex items-center justify-center h-16 w-16 rounded-full bg-gray-100">
                  <img
                    src={item?.imageSrc}
                    alt={item?.name}
                    className="h-8 w-8 object-contain"
                  />
                </div>
              </div>

              <div className="mt-4 sm:ml-6 lg:ml-0">
                <h3 className="text-base font-semibold text-gray-900">
                  {item?.name}
                </h3>
                <p className="mt-2 text-sm text-gray-500">
                  {item?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default FooterTop;
