import { PhoneIcon } from "@heroicons/react/20/solid";
type FormatPhoneProps = {
  phoneNumber: any;
};
const FormatPhone = ({ phoneNumber }: FormatPhoneProps) => {
  return (
    <div className="underline ">
      {phoneNumber &&
        phoneNumber
          .replace("+1", "")
          .replace(/\D+/g, "")
          .replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3")}
    </div>
  );
};

export default FormatPhone;
