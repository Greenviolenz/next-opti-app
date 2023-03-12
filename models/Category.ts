export interface Service {
  title: string
  bgcolor: string
  priority: number
  subcategories: ServiceCategory[]
}

export interface ServiceCategory {
  title: string
  content: string
  image: string
}
