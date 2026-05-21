import data from '../data/portfolio.json';
import type { PortfolioData } from '../types/portfolio';

const portfolio = data as PortfolioData;

export function usePortfolio(): PortfolioData {
  return portfolio;
}
