import React, { useState, useCallback, useLayoutEffect } from 'react';
import { isBefore } from 'date-fns';

import { Container, Header, Form } from './styles';

import Calendar from '../../../components/Calendar';

const Availability: React.FC = () => {
  const [checkinDate, setCheckinDate] = useState<Date | null>(null);
  const [openCheckinDate, setOpenCheckinDate] = useState<boolean>(false);
  const [checkoutDate, setCheckoutDate] = useState<Date | null>(null);
  const [openCheckoutDate, setOpenCheckoutDate] = useState<boolean>(false);

  const toggleCheckinDate = useCallback((date) => {
    setCheckinDate(date);
  }, []);

  const toggleCheckoutDate = useCallback((date) => {
    setCheckoutDate(date);
  }, []);

  useLayoutEffect(() => {
    if (checkinDate && checkoutDate) {
      const validateCheckout = isBefore(checkoutDate, checkinDate)
        ? null
        : checkoutDate;
      setCheckoutDate(validateCheckout);
    }
  }, [checkinDate, checkoutDate, openCheckoutDate]);

  return (
    <Container>
      <Header>
        <span>
          <strong>R$128</strong>
          /Dia
        </span>
      </Header>
      <Form autoComplete="off">
        <div className="form-input">
          <label>
            CHECK-IN
            <Calendar
              selected={checkinDate}
              onChange={(date: Date) => toggleCheckinDate(date)}
              placeholderText="Insira a data"
              minDate={new Date()}
              open={openCheckinDate}
              onInputClick={() => setOpenCheckinDate(true)}
              onClickOutside={() => setOpenCheckinDate(false)}
            />
          </label>
        </div>

        <div className="form-input">
          <label>
            CHECKOUT
            <Calendar
              selected={checkoutDate}
              onChange={(date: Date) => toggleCheckoutDate(date)}
              placeholderText="Insira a data"
              minDate={checkinDate || new Date()}
              open={openCheckoutDate}
              onInputClick={() => setOpenCheckoutDate(true)}
              onClickOutside={() => setOpenCheckoutDate(false)}
            />
          </label>
        </div>

        <div className="form-input">
          <label>
            HOSPÉDES
            <input type="text" placeholder="Insira o numéro de hospedes" />
          </label>
        </div>

        <div className="form-input">
          <button type="submit">
            <span>Conferir disponibilidade</span>
          </button>
        </div>
      </Form>
    </Container>
  );
};

export default Availability;