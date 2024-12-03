import { AppsumoCodeTryModel } from "@schema/AppsumoCodeTrySchema";

export default defineEventHandler(async event => {

    const data = await getRequestData(event, { requireSchema: false, allowGuests: false, allowLitlyx: false });
    if (!data) return;

    const { pid } = data;

    const tryRes = await AppsumoCodeTryModel.findOne({ project_id: pid }, { valid_codes: 1 });
    if (!tryRes) return { count: 0 }
    return { count: tryRes.valid_codes.length }

});