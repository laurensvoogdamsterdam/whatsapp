import moment from "moment";

const getToday = () => {
  return moment().format("YYYY-MM-DD");
};

export default function useHelpers() {
  return {
    getToday,
  };
}
