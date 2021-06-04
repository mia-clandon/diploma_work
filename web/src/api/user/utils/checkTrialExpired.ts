import daysToTarget from "@rssapp/storybook/lib/calc/date/daysToTarget";

function checkTrialExpired(subscription: any) {
  if (!subscription) {
    return false;
  }

  if (!subscription.isTrial) {
    return false;
  }

  if (daysToTarget(subscription.trialEnd) <= 0) {
    return true;
  }
}
export default checkTrialExpired;
