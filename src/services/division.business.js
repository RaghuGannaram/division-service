import { catchAsyncBusinessError, BusinessError, BusinessErrors } from "../utils/application-errors.js";
import logger from "../configs/logger.config.js";

const division = catchAsyncBusinessError(async (number1, number2) => {
    logger.info(`divisionBusinessService.division called with number1=${number1} and number2=${number2}`);

    if (isNaN(number1) || isNaN(number2)) {
        throw new BusinessError(BusinessErrors.VALIDATION_FAILURE, "number1 and number2 must be numbers");
    }

    if (number2 == 0) {
        throw new BusinessError(BusinessErrors.DIVIDE_BY_ZERO_ERROR, "number2 must be different than 0");
    }

    return number1 / number2;
});

export default {
    division,
};
