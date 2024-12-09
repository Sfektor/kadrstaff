import { useCallback, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { ModalProviderContext, MenuProviderContext } from "./context";
import { Header, Footer } from "./components/GlobalComp";
import { CustomModal, FormCallback } from "./components/OtherComp";
import { Rout } from "./routes/Routes";
import styled from "styled-components";

const Main = styled.div`
  flex: 0 1 100%;
`;

const App = () => {
  const [checkCapture, setCheckCapture] = useState(false);
  const [sendingForm, setSendingForm] = useState(false);
  const [error, setError] = useState(false);
  const methods = useForm();

  const onSubmitForm = useCallback(async (data) => {
    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => {
        setCheckCapture(!checkCapture);
        setSendingForm(true);
        res.json();
      })
      .catch((e) => {
        setError(true);
        console.log(e.message);
      });
  }, []);

  return (
    <ModalProviderContext>
      <MenuProviderContext>
        <Header />
      </MenuProviderContext>

      <Main>
        <Rout />
      </Main>

      <Footer />

      <CustomModal
        title={`${!sendingForm ? "ЗАКАЖИТЕ ЗВОНОК" : "Сообщение успешно отправлено!"}`}
        subTitle={"Наш специалист свяжется с вами в ближайшее время!"}
        setSendingForm={setSendingForm}
        setCheckCapture={setCheckCapture}
      >
        <FormProvider {...methods}>
          {!sendingForm ? (
            <FormCallback
              onSubmitForm={onSubmitForm}
              setCheckCapture={setCheckCapture}
              checkCapture={checkCapture}
              error={error}
              sendingForm={sendingForm}
              setSendingForm={setSendingForm}
            />
          ) : null}
        </FormProvider>
      </CustomModal>
    </ModalProviderContext>
  );
};

export default App;
