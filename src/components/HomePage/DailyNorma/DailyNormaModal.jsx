import { useCallback, useEffect , useState } from 'react';
import { /* useDispatch, */ useSelector } from 'react-redux';
import { selectUserProfile } from '../../../redux/auth/authSelectors';
/* import { toast } from 'react-toastify'; */

import {
    DailyWrapper,
    DailyTitle,
    DailySpan,
    DailyPrg,
    DailyDescrWrp,
    DailyDescr,
    DailyForm,
    DailyFormTitle,
    DailyLabel,
    DailyTextInput,
    DailyButton,
    DailyNormaWrp,
    DailyRadioWrp,
    DailyRadioInput,
    DailyInputPrg,
} from './DailyNormaModal.styled';


export const DailyNormaModal = () => {
   /*  const dispatch = useDispatch(); */
    const { gender: reduxGender, waterRate } = useSelector(selectUserProfile);
    const [gender, setGender] = useState(reduxGender);
    const [weight, setWeight] = useState('');
    const [activityTime, setActivityTime] = useState('');
    const [dailyIntake, setDailyIntake] = useState((waterRate / 1000).toFixed(1));
    const [intakeGoal, setIntakeGoal] = useState('');

    const calculateWater = useCallback(() => {
        if (!weight || !activityTime) return;
        const factor = gender === 'woman' ? 0.03 : 0.04;
        const activityFactor = gender === 'woman' ? 0.4 : 0.6;
        const intake = (
            (weight + factor) * ((activityTime / 60) + activityFactor)
        ).toFixed(2);
        setDailyIntake(intake);
    }, [gender, weight, activityTime]);
        
    useEffect(() => {
    calculateWater();
  }, [calculateWater]);

  const handleIntakeGoalChange = e => {
    const value = e.target.value;
    const newIntakeGoal = parseFloat(value);

    if (!isNaN(newIntakeGoal) && newIntakeGoal >= 1) {
      setIntakeGoal(newIntakeGoal);
    } else if (value === '') {
      setIntakeGoal('');
    }

    /*  const handleSave = () => {

  };  */
    };
    
    

    return (
        <DailyWrapper>
            <DailyTitle>My daily norma</DailyTitle>
            <DailyNormaWrp>
                <DailyPrg>For woman:<DailySpan> V=(M*0,03) + (T*0,4)</DailySpan></DailyPrg>
                <DailyPrg>For man:<DailySpan> V=(M*0,04) + (T*0,6)</DailySpan></DailyPrg>
            </DailyNormaWrp>
            
            <DailyDescrWrp>
                <DailyDescr><DailySpan>*</DailySpan>V is the volume of the water norm in liters per day, M is your body weight, T is the time of
                    active sports, or another
                    type of activity commensurate in terms of loads (in the absence of these, you must set 0) </DailyDescr>
            </DailyDescrWrp>
            <DailyForm>
                <DailyFormTitle>Calculate your rate:</DailyFormTitle>
                <DailyRadioWrp>
                    <DailyLabel>
                        <DailyRadioInput
                            type="radio"
                            name="gender"
                            value="woman"
                            checked={gender === 'woman'}
                            onChange={() => setGender('woman')}
                        />
                        For woman
                    </DailyLabel>
                    <DailyLabel>
                        <DailyRadioInput
                            type="radio"
                            name="gender"
                            value="man"
                            checked={gender === 'man'}
                            onChange={() => setGender('man')}
                        />
                        For man
                    </DailyLabel>
                </DailyRadioWrp>
                <DailyLabel>
                    Your weight in kilograms:
                    <DailyTextInput
                        type="number"
                        name="weight"
                        placeholder="0"
                        value={weight}
                        onChange={e => setWeight(e.target.value)}
                    />
                </DailyLabel>
                <DailyLabel>
                    The time of active participation in sports or other activities with a high physical. load in hours:
                    <DailyTextInput
                        type="number"
                        name="time"
                        placeholder="0"
                        value={activityTime}
                        onChange={e => setActivityTime(e.target.value)}
                    />
                </DailyLabel>
                <DailyInputPrg>The required amount of water in liters per day:
                    <DailySpan> {parseFloat(dailyIntake).toFixed(1)} L</DailySpan>
                </DailyInputPrg>
                <DailyLabel>
                    Write down how much water you will drink:
                    <DailyTextInput
                        type="number"
                        name="water"
                        placeholder="0"
                        value={intakeGoal}
                        onChange={handleIntakeGoalChange}
                    />
                    
                </DailyLabel>
                <DailyButton /* onClick={handleSave} */>
                    Save
                </DailyButton>
            </DailyForm>
        </DailyWrapper>
    

    );
};