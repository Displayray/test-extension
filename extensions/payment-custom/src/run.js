// @ts-check

/**
 * @typedef {import("../generated/api").RunInput} RunInput
 * @typedef {import("../generated/api").FunctionRunResult} FunctionRunResult
 */

/**
 * @type {FunctionRunResult}
 */
const NO_CHANGES = {
  operations: [],
};

/**
 * @param {RunInput} input
 * @returns {FunctionRunResult}
 */
export function run(input) {
  /*const configuration = JSON.parse(
    input?.paymentCustomization?.metafield?.value ?? "{}"
  );*/
  const cartTotal = parseFloat(input.cart.cost.totalAmount.amount ?? "0.0");
  if(cartTotal < 100) {
    console.error("Cart total is higher than 100")
    return NO_CHANGES;
  }

  const hidePaymentMethod = input.paymentMethods.find(method => method.name.includes("Credit Card"))

  if(!hidePaymentMethod) {
    return NO_CHANGES
  }

  return {
    operations: [{
      hide: {
        paymentMethodId: hidePaymentMethod.id
      }
    }]
  }

};