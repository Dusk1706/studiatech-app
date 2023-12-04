import Details from "@/components/Gigs/Details";
import Pricing from "@/components/Gigs/Pricing";
import { useStateProvider } from "@/context/StateContext";
import { reducerCases } from "@/context/constants";
import { CHECK_USER_ORDERED_GIG_ROUTE, GET_GIG_DATA } from "@/utils/constants";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useCookies } from "react-cookie";

function GigsPage() {
  const router = useRouter();
  const [cookies] = useCookies();
  const { gigId } = router.query;

  const [{ userInfo }, dispatch] = useStateProvider();

  useEffect(() => {
    const fetchGigData = async () => {
      try {
        const {
          data: { gig },
        } = await axios.get(`${GET_GIG_DATA}/${gigId}`);
        dispatch({ type: reducerCases.SET_GIG_DATA, gigData: gig });
      } catch (err) {
        console.log(err);
      }
    };
    if (gigId) {
      fetchGigData();
    }
  }, [gigId, dispatch]);

  useEffect(() => {
    const checkGigOrdered = async () => {
      const {
        data: { hasUserOrderedGig },
      } = await axios.get(`${CHECK_USER_ORDERED_GIG_ROUTE}/${gigId}`, {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${cookies.jwt}`,
        },
      });
      dispatch({
        type: reducerCases.HAS_USER_ORDERED_GIG,
        hasOrdered: hasUserOrderedGig,
      });
    };
    if (userInfo) {
      checkGigOrdered();
    }
  }, [dispatch, gigId, userInfo]);

  return (
    <div className="grid grid-cols-3 mx-32 gap-20">
      <Details />
      <Pricing />
    </div>
  );
}

export default GigsPage;
