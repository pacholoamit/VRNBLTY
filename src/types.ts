export type Breach = {
    Name: string
    Title: string
    Domain: string
    BreachDate: string
    AddedDate: string
    ModifiedDate: string
    PwnCount: number
    Description: string
    LogoPath: string
    DataClasses: string[]
    IsVerified: boolean
    IsFabricated: boolean
    IsSensitive: boolean
    IsRetired: boolean
    IsSpamList: boolean
    IsMalware: boolean
}

export interface styles {
    [key: string]: React.CSSProperties
}