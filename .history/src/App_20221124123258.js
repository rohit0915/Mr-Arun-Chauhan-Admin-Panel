/** @format */

import { Routes, Route, Link } from "react-router-dom";
import Login from "./components/forms/Login";
import Dashboard from "./components/pages/Dashboard";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TotalListedProducts from "./components/pages/products/Products";
import CategoryDetailsManages from "./components/pages/categories/Categories";
import SubCategories from "./components/pages/subcategories/SubCategories";
import ManageProfiles from "./components/pages/manageprofiles/ManageProfiles";
import Banner from "./components/pages/banner/Banner";
import Gallary from "./components/pages/gallary/Gallary";
import Booking from "./components/pages/booking/Booking";
import HelpAndSupport from "./components/pages/helpandsupport/HelpAndSupport";
import Testimonials from "./components/pages/testimonials/Testimonials";
import DailyRequest from "./components/pages/dailyrequest/DailyRequest";
import Complaints from "./components/pages/complaints/Complaints";
import Orders from "./components/pages/orders/Orders";
import TermsAndCondition from "./components/pages/termsandcondition/TermsAndCondition";
import Privacy from "./components/pages/privacyPolicy/Privacy";
import Support from "./components/pages/support/Support";
import Wishlist from "./components/pages/wishlist/Wishlist";
import AddProduct from "./components/pages/products/AddProduct";
import VendorLogin from "./vendorPanel/components/forms/VendorLogin.jsx";
import VendorProducts from "./vendorPanel/components/pages/products/VendorProducts";
import VendorServiceRegistration from "./vendorPanel/components/pages/serviceregistration/VendorServiceRegistration";
import VendorCategories from "./vendorPanel/components/pages/categories/VendorCategories";
import VendorOrders from "./vendorPanel/components/pages/orders/VendorOrders";
import VendorSupport from "./vendorPanel/components/pages/support/VendorSupport";
import Commission from "./vendorPanel/components/pages/commission/Commission";
import VendorReportStatistics from "./vendorPanel/components/pages/report/VendorReport";
import VendorComplaint from "./vendorPanel/components/pages/complaint/VendorComplaint";
import VendorComments from "./vendorPanel/components/pages/comments/VendorComments";
import VendorCheckOutTransactions from "./vendorPanel/components/pages/transactions/VendorTransactions";
import VendorUsers from "./vendorPanel/components/pages/users/VendorUsers";
import VendorRequestAppointments from "./vendorPanel/components/pages/request/VendorRequest";
import VendorDashboard from "./vendorPanel/components/pages/VendorDashboard";
import VendorPrivacy from "./vendorPanel/components/pages/privacyPolicy/VendorPrivacy";
import VendorFavorites from "./components/pages/favorites/VendorFavorites";
import CouponsDiscount from "./vendorPanel/components/pages/couponsDiscount/CouponsDiscount";
import Forgot from "./components/forms/Forgot";
import Vendors from "./components/pages/vendors/Vendors";
import VerifyOtp from "./components/forms/VerifyOtp";
import VendorAddProduct from "./vendorPanel/components/pages/products/VendorAddProduct";
import VendorAllotmentOfTasks from "./vendorPanel/components/pages/allotment/VendorAllotment";
import VendorViewProduct from "./vendorPanel/components/pages/products/VendorViewProduct";
import VendorAddToCart from "./vendorPanel/components/pages/addtocart/VendorAddToCart";
import VendorTaskPerformedDetails from "./vendorPanel/components/pages/taskperformed/VendorTaskPerformed";
import PaymentsTransactions from "./components/pages/payments/Payments";
import Setting from "./components/pages/setting/Setting";
import Coupon from "./components/pages/coupons/Coupon";
import Signup from "./components/pages/SignUP/Signup";
import Profile from "./components/pages/profileUpdate/Profile";
import Restaurant from "./components/pages/Restaurant/Restaurant";
import Restaurantby from "./components/pages/Restaurant/Restaurantby";
import Dishes from "./components/pages/Dishes/Dishes";
import AboutUs from "./components/pages/aboutus/AboutUs";
import TotalServices from "./components/pages/totalservices/TotalServices";
import AcceptRequestFromVendors from "./components/pages/acceptrequest/AcceptRequest";
import Users from "./components/pages/users/Users";
import ViewOrder from "./components/pages/orders/ViewOrder";
import UserTransactions from "./components/pages/orders/UserTransactions";
import UploadServices from "./components/pages/uploadservices/UploadServices";
import VendorManagesProductsServices from "./vendorPanel/components/pages/managesproducts/VendorManagesProducts";
import VendorManagePartnerMerchant from "./vendorPanel/components/pages/managepartner/VendorManagePartner";
import VendorPaidAdsFeature from "./vendorPanel/components/pages/paidads/VendorPaidAds";
import VendorUsersComment from "./vendorPanel/components/pages/users/VendorUsers";
import VendorRatingAndReviews from "./vendorPanel/components/pages/rating/VendorRating";
import VendorSetting from "./vendorPanel/components/pages/setting/VendorSetting";
import VendorTotalProducts from "./vendorPanel/components/pages/totalproducts/VendorTotalProducts";
import VendorTotalCategory from "./vendorPanel/components/pages/totalcategory/VendorTotalCategory";
import VendorTotalOrders from "./vendorPanel/components/pages/totalorders/VendorTotalOrders";
import VendorUsersList from "./vendorPanel/components/pages/userslist/VendorUsersList";
import VendorCategory from "./vendorPanel/components/pages/category/VendorCategory";
import VendorNewProducts from "./vendorPanel/components/pages/newproducts/VendorNewProducts";
import VendorNewUsers from "./vendorPanel/components/pages/newusers/VendorNewUsers";
import VendorPayment from "./vendorPanel/components/pages/payment/VendorPayment";
import VendorCategoryDetails from "./vendorPanel/components/pages/categorydetails/VendorCategoryDetails";
import Cat from "./components/pages/Category/Cat";
import Brand from "./components/pages/Brand/Brand";
import Blog from "./components/pages/Blog/Blog";
import Service from "./components/pages/Services/Service";
import Periodic from "./components/pages/Periodic/Periodic";
import Seller from "./components/pages/Seller/Seller";
import User from "./components/pages/User/User";

function App() {
  return (
    <>
      <ToastContainer />

      <Routes>
        <Route path="/" element={<Login />} />

        <Route path="/cat" element={<Cat />} />
        <Route path="/brand" element={<Brand />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/services" element={<Service />} />
        <Route path="/periodicService" element={<Periodic />} />
        <Route path='/sellor' element={<Seller />} />
        <Route path="/user" element={<User />} />

        <Route path="/forgotPassword" element={<Forgot />} />
        <Route path="/verifyOtp" element={<VerifyOtp />} />
        <Route path="/vendors" element={<Vendors />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/manage-profiles " element={<ManageProfiles />} />
        <Route path="/products" element={<TotalListedProducts />} />
        <Route path="/categories" element={<CategoryDetailsManages />} />
        <Route path="/sub-categories" element={<SubCategories />} />
        <Route path="/banners" element={<Banner />} />
        <Route path="/gallary" element={<Gallary />} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/daily-request" element={<DailyRequest />} />
        <Route path="/complaints" element={<Complaints />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/termsandcondition" element={<TermsAndCondition />} />
        <Route path="/privacyPolicy" element={<Privacy />} />
        <Route path="/support" element={<Support />} />
        <Route path="/upload" element={<UploadServices />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/payments" element={<PaymentsTransactions />} />
        <Route path="/setting" element={<Setting />} />
        <Route path="/restaurant/:id/coupons" element={<Coupon />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/restaurants" element={<Restaurant />} />
        <Route path="/Restaurantby/:id" element={<Restaurantby />} />
        <Route path="/:id/dishes" element={<Dishes />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/total-services" element={<TotalServices />} />
        <Route
          path="/accept-request-from-vendors"
          element={<AcceptRequestFromVendors />}
        />
        <Route path="/users" element={<Users />} />
        <Route path="/helpandsupport" element={<HelpAndSupport />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/vieworder/:id" element={<ViewOrder />} />
        <Route path="/usertransactions/:id" element={<UserTransactions />} />



          <Route path='/pushNotification' element={<Notif}

        {/* /restaurant/:id/coupons  */}

        {/* ---------------Vendor Panel----------------------- */}

        <Route path="/vendorLogin" element={<VendorLogin />} />
        <Route path="/vendorDashboard" element={<VendorDashboard />} />
        <Route path="/vendorProducts" element={<VendorProducts />} />
        <Route
          path="/vendorService-registration"
          element={<VendorServiceRegistration />}
        />
        <Route path="/vendorViewProduct/:id" element={<VendorViewProduct />} />
        <Route path="/vendorAddProduct" element={<VendorAddProduct />} />
        <Route path="/vendorCategories" element={<VendorCategories />} />
        <Route path="/vendorOrders" element={<VendorOrders />} />
        <Route path="/vendorSupport" element={<VendorSupport />} />
        <Route path="/commission" element={<Commission />} />
        <Route path="/vendorReport" element={<VendorReportStatistics />} />
        <Route
          path="/vendorTask-performed"
          element={<VendorTaskPerformedDetails />}
        />
        <Route path="/vendorComplaint" element={<VendorComplaint />} />
        <Route path="/vendorRequest" element={<VendorRequestAppointments />} />
        <Route path="/vendorComments" element={<VendorComments />} />
        {/* <Route path="/vendorTransactions" element={<VendorTransactions />} /> */}
        <Route path="/vendorUsers" element={<VendorUsers />} />
        <Route path="/vendorPrivacy" element={<VendorPrivacy />} />
        <Route path="/vendorFavorites" element={<VendorFavorites />} />
        <Route path="/vendorCoupons" element={<CouponsDiscount />} />
        <Route path="/vendorAllotment" element={<VendorAllotmentOfTasks />} />
        <Route path="/vendorCommission" element={<Commission />} />
        <Route
          path="/vendorManages"
          element={<VendorManagesProductsServices />}
        />
        <Route
          path="/vendorManage-partner"
          element={<VendorManagePartnerMerchant />}
        />
        <Route path="/vendorPayment" element={<VendorPayment />} />
        <Route path="/vendorAdd-to-cart" element={<VendorAddToCart />} />
        <Route
          path="/vendorPaid-ads-feature"
          element={<VendorPaidAdsFeature />}
        />
        <Route path="/vendorUsers-comment" element={<VendorUsersComment />} />
        <Route
          path="/vendorRating-and-reviews"
          element={<VendorRatingAndReviews />}
        />
        <Route path="/vendorSetting" element={<VendorSetting />} />
        <Route path="/totalproducts" element={<VendorTotalProducts />} />
        <Route path="/totalcategory" element={<VendorTotalCategory />} />
        <Route path="/totalorders" element={<VendorTotalOrders />} />
        <Route path="/userslist" element={<VendorUsersList />} />
        <Route path="/category" element={<VendorCategory />} />
        <Route path="/newproducts" element={<VendorNewProducts />} />
        <Route path="/newusers" element={<VendorNewUsers />} />
        <Route
          path="/vendorTransactions"
          element={<VendorCheckOutTransactions />}
        />
        <Route
          path="/vendorCategory-details"
          element={<VendorCategoryDetails />}
        />
      </Routes>
    </>
  );
}

export default App;
