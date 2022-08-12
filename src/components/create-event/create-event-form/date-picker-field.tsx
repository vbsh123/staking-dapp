import DatePicker  from 'react-datepicker';

type Props = {
    name: string,
    value: any,
    onChange: Function
}

const DatePickerField = ({ name, value, onChange }: Props) => {
    return (
        <div className='flex m-1'>
        <DatePicker
            showTimeSelect
            dateFormat="Pp"
            className="text-white m-1 rounded-lg pl-1.5 border-red-200 border-2 bg-[#383838] h-10"
            selected={(value && new Date(value)) || null}
            onChange={val => {
                onChange(name, val);
            }}
        />
        </div>
    );
};

export default DatePickerField