

class WorkExperience {
  companyName: string;
  position: string;
  startDate: Date;
  endDate?: Date;
  description: string;

  constructor(companyName: string, position: string, startDate: Date, endDate: Date, description: string) {
    this.companyName = companyName;
    this.position = position;
    this.startDate = startDate;
    this.endDate = endDate;
    this.description = description;
  }

  get date(): string {
      // Nov 2024,
      let start = this.startDate.toLocaleDateString('default', { month: 'short', year: 'numeric' });
      let end = this.endDate?.toLocaleDateString('default', { month: 'short', year: 'numeric' }) ?? 'Present';
      return `${start} - ${end}`;
  }

  get title(): string {
      return `${this.position} at ${this.companyName}`;
  }

}

export default WorkExperience;