import { MdOutlineStarOutline } from "react-icons/md";
import AddToCartBtn from "./AddToCartBtn";
import { useState } from "react";
import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import FormattedPrice from "./FormattedPrice";
import ProductCardSideNav from "./ProductCardSideNav";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ item, setSearchText }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigation = useNavigate();

  const open = () => setIsOpen(true);
  const close = () => setIsOpen(false);

  const percentage =
    ((item?.regularPrice - item?.discountedPrice) / item?.regularPrice) * 100;

  const handleProduct = () => {
    navigation(`/product/${item?._id}`);
    if (setSearchText) setSearchText("");
  };

  return (
    <div className="border border-gray-200 rounded-xl p-2 overflow-hidden bg-white hover:shadow-lg hover:shadow-gray-200 duration-300 cursor-pointer">
      {/* الصورة بخلفية رمادية */}
      <div className="w-full h-60 relative p-3 group bg-gray-100 rounded-xl flex items-center justify-center overflow-hidden">
        <span
          onClick={open}
          className="bg-black text-skyText absolute top-2 left-2 px-3 py-1 text-xs font-semibold rounded-md z-10"
        >
          Save {percentage.toFixed(0)}%
        </span>
        <img
          onClick={handleProduct}
          src={item?.images[0]}
          alt="productImage"
          className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
        />
        <ProductCardSideNav product={item} />
      </div>

      {/* التفاصيل */}
      <div className="flex flex-col gap-2 px-2 py-3">
        <h3 className="text-xs uppercase font-semibold text-gray-500">
          {item?.overView}
        </h3>
 <h2 className="text-lg font-bold line-clamp-2 text-gray-900">
  {item?.title || item?.name || `Product ${item?._id}`}
</h2>



        {/* التقييم */}
        <div className="text-base text-yellow-500 flex items-center">
          <MdOutlineStarOutline />
          <MdOutlineStarOutline />
          <MdOutlineStarOutline />
          <MdOutlineStarOutline />
          <MdOutlineStarOutline />
        </div>

        {/* زر إضافة للسلة */}
        <AddToCartBtn product={item} />
      </div>

      {/* البوب أب (Dialog) */}
      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-50 focus:outline-none"
          onClose={close}
        >
          {/* الخلفية الشفافة */}
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm transition-opacity" />

          {/* المحتوى */}
          <div className="fixed inset-0 flex items-center justify-center p-4">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95 translate-y-4"
              enterTo="opacity-100 scale-100 translate-y-0"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100 translate-y-0"
              leaveTo="opacity-0 scale-95 translate-y-4"
            >
              <DialogPanel className="w-full max-w-md rounded-2xl bg-white shadow-2xl p-6 text-gray-900 transform transition-all">
                <DialogTitle
                  as="h3"
                  className="text-lg font-semibold text-gray-900 flex items-center justify-between"
                >
                  🎉 Hurry up!
                  <button
                    onClick={close}
                    className="text-gray-500 hover:text-gray-800 transition-colors"
                  >
                    ✕
                  </button>
                </DialogTitle>

                <p className="mt-3 text-sm text-gray-600">
                  You are going to save{" "}
                  <span className="text-skyText font-semibold">
                    <FormattedPrice
                      amount={item?.regularPrice - item?.discountedPrice}
                    />
                  </span>{" "}
                  from this product.
                </p>

                <p className="mt-2 text-sm text-gray-600 leading-relaxed">
                  Enjoy exclusive discounts and limited offers on this product!
                </p>

                <div className="mt-5 flex justify-end">
                  <Button
                    className="rounded-md bg-black px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800 transition-all"
                    onClick={close}
                  >
                    Got it, thanks!
                  </Button>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default ProductCard;
