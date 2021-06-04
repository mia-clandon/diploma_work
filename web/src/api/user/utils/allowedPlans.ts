import { PLANS } from '../../../features/website/subscription/utils/constants';

const allowedPlans = [PLANS.Developer, PLANS.Premium, PLANS.Custom] as const;

export default allowedPlans;
