import { IconTelegram, IconVK, IconViber, IconWhatsapp } from "../../../assets/icons";
import { Wrapper, LinkIcon } from "./Social.styled";

export const Social = ({ styleWrapper, styleLink }) => {
  return (
    <Wrapper style={styleWrapper}>
      <LinkIcon href="#" style={styleLink}>
        <IconTelegram />
      </LinkIcon>
      <LinkIcon href="#" style={styleLink}>
        <IconVK />
      </LinkIcon>
      <LinkIcon href="#" style={styleLink}>
        <IconViber />
      </LinkIcon>
      <LinkIcon href="#" style={styleLink}>
        <IconWhatsapp />
      </LinkIcon>
    </Wrapper>
  );
};
