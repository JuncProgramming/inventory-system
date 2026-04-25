import type { Request, Response } from 'express';
import * as productService from '@/services/productService.js';

export const getProducts = async (req: Request, res: Response) => {
  try {
    const products = await productService.getAllProducts();
    
    res.status(200).json({
      success: true,
      data: products,
    });
  } catch (error) {
    console.error('Błąd pobierania produktów:', error);
    res.status(500).json({ success: false, message: 'Wewnętrzny błąd serwera' });
  }
};