"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePatientAppointmentDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const CreateAppointmentPayment_dto_1 = require("./CreateAppointmentPayment.dto");
class UpdatePatientAppointmentDto extends (0, mapped_types_1.PartialType)(CreateAppointmentPayment_dto_1.CreatePatientAppointmentDto) {
}
exports.UpdatePatientAppointmentDto = UpdatePatientAppointmentDto;
//# sourceMappingURL=UpdateAppointmentPayment.dto.js.map