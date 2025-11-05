interface Credits<T>{
  credits: number
  brand: T
}
interface MajorCredits {
  credits: number
  brand: "Major"
}
interface MinorCredits {
  credits: number
  brand: "Minor"
}
type Subject = MajorCredits | MinorCredits
type SumFunction = (subject1: Subject, subject2: Subject) => number

const sumMajorCredits: SumFunction = (subject1, subject2) => {
  return subject1.credits + subject2.credits
}

const sumMinorCredits: SumFunction = (subject1, subject2) => {
  return subject1.credits + subject2.credits
}