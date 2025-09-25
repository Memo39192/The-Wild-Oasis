import Form from '../../ui/Form';
import FormRow from '../../ui/FormRow';
import Input from '../../ui/Input';
import Spinner from '../../ui/Spinner';
import useSettings from './useSettings';
import { useUpdateSetting } from './useUpdateSetting';

function UpdateSettingsForm() {
  const { updateSetting, isUpdating } = useUpdateSetting();

  const {
    isPending,
    settings: {
      minBookingLength,
      maxBookingLength,
      maxGuestsPerBooking,
      breakfastPrice,
    } = {},
  } = useSettings();

  function handle(e, field) {
    const { value } = e.target;

    if (!value) return;
    updateSetting({ [field]: value });
  }

  if (isPending) return <Spinner />;

  return (
    <Form $type='regular'>
      <FormRow label='Minimum nights/booking'>
        <Input
          disabled={isUpdating}
          defaultValue={minBookingLength}
          type='number'
          id='min-nights'
          onBlur={e => handle(e, 'minBookingLength')}
        />
      </FormRow>
      <FormRow label='Maximum nights/booking'>
        <Input
          disabled={isUpdating}
          defaultValue={maxBookingLength}
          type='number'
          id='max-nights'
          onBlur={e => handle(e, 'maxBookingLength')}
        />
      </FormRow>
      <FormRow label='Maximum guests/booking'>
        <Input
          disabled={isUpdating}
          defaultValue={maxGuestsPerBooking}
          type='number'
          id='max-guests'
          onBlur={e => handle(e, 'maxGuestsPerBooking')}
        />
      </FormRow>
      <FormRow label='Breakfast price'>
        <Input
          disabled={isUpdating}
          defaultValue={breakfastPrice}
          type='number'
          id='breakfast-price'
          onBlur={e => handle(e, 'breakfastPrice')}
        />
      </FormRow>
    </Form>
  );
}

export default UpdateSettingsForm;
