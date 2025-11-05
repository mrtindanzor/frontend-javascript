type Credits<T> = {
  credits: number
  brand: T
}
type MajorCredits = Credits<"Major">
type MinorCredits = Credits<"Minor">
type Subject = MajorCredits | MinorCredits
type SumFunction = (subect1: Subject, subect2: Subject) => number

const sumMajorCredits: SumFunction = (subect1, subject2) => {
  return subect1.credits + subject2.credits
}

const sumMinorCredits: SumFunction = (subect1, subject2) => {
  return subect1.credits + subject2.credits
}