export default {
  getQuery: () => {
    let school = SchoolDropdown.selectedOptionValue;
    let cls = ClassDropdown.selectedOptionValue;
    let section = SectionDropdown.selectedOptionValue;

    let baseQuery = "SELECT * FROM public.student_data WHERE 1=1";

    if (school) {
      baseQuery += ` AND school_name ILIKE '${school}'`;
    }

    if (cls) {
      baseQuery += ` AND class ILIKE '${cls}'`;
    }

    if (section) {
      baseQuery += ` AND section ILIKE '${section}'`;
    }

    return baseQuery;
  }
}
