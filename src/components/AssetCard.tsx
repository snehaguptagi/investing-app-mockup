
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { AlertTriangle, Info, TrendingUp, Calendar, ArrowRight } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface AssetCardProps {
  title: string;
  description: string;
  returns: string;
  tenure: string;
  minInvestment: string;
  risk: 'Low' | 'Medium' | 'High';
  recommended?: boolean;
  className?: string;
}

const AssetCard = ({
  title,
  description,
  returns,
  tenure,
  minInvestment,
  risk,
  recommended = false,
  className,
}: AssetCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  const getRiskColor = (risk: 'Low' | 'Medium' | 'High') => {
    switch (risk) {
      case 'Low':
        return 'text-green-500 bg-green-50';
      case 'Medium':
        return 'text-amber-500 bg-amber-50';
      case 'High':
        return 'text-red-500 bg-red-50';
    }
  };

  return (
    <div
      className={cn(
        'relative overflow-hidden rounded-xl transition-all duration-300 h-full',
        isHovered ? 'shadow-lg transform -translate-y-1' : 'shadow-md',
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background - animates on hover */}
      <div
        className={cn(
          'absolute inset-0 bg-gradient-to-br from-white to-grip-light/20 transition-transform duration-500 ease-out-expo',
          isHovered ? 'scale-105' : 'scale-100'
        )}
      />

      {/* Border - animates on hover */}
      <div
        className={cn(
          'absolute inset-0 border border-grip-light/50 rounded-xl transition-opacity duration-300',
          isHovered ? 'opacity-0' : 'opacity-100'
        )}
      />

      {/* Glowing border effect on hover */}
      <div
        className={cn(
          'absolute inset-0 border-2 border-grip-blue/20 rounded-xl opacity-0 transition-opacity duration-300',
          isHovered && 'opacity-100'
        )}
      />

      {recommended && (
        <div className="absolute top-4 right-4 bg-grip-accent text-white text-xs font-medium px-2 py-1 rounded-full z-10">
          Recommended
        </div>
      )}

      <div className="relative p-6 z-10">
        <h3 className="text-xl font-semibold text-grip-dark mb-2">{title}</h3>
        <p className="text-grip-neutral text-sm mb-4">{description}</p>

        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-grip-light/50">
            <div className="flex items-center text-grip-neutral text-xs mb-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              <span>Returns</span>
            </div>
            <div className="text-grip-blue font-semibold">{returns}</div>
          </div>

          <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-grip-light/50">
            <div className="flex items-center text-grip-neutral text-xs mb-1">
              <Calendar className="h-3 w-3 mr-1" />
              <span>Tenure</span>
            </div>
            <div className="text-grip-dark font-semibold">{tenure}</div>
          </div>
        </div>

        <div className="flex items-center justify-between mb-6">
          <div>
            <div className="text-xs text-grip-neutral mb-1">Minimum Investment</div>
            <div className="text-grip-dark font-medium">{minInvestment}</div>
          </div>
          
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger className="group">
                <div className={cn('flex items-center space-x-1 px-2 py-1 rounded-full', getRiskColor(risk))}>
                  <AlertTriangle className="h-3 w-3" />
                  <span className="text-xs font-medium">{risk} Risk</span>
                </div>
              </TooltipTrigger>
              <TooltipContent className="p-4 max-w-xs">
                <div className="text-sm font-medium mb-1">About {risk} Risk</div>
                <p className="text-xs text-grip-neutral">
                  {risk === 'Low' && 'Lower risk typically means lower returns but higher security and stability.'}
                  {risk === 'Medium' && 'Medium risk offers a balance between potential returns and volatility.'}
                  {risk === 'High' && 'Higher risk may lead to higher returns but comes with increased volatility and potential loss.'}
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        <Button 
          className={cn(
            'w-full transition-all duration-300 group',
            isHovered 
              ? 'bg-grip-blue hover:bg-grip-blue/90 text-white' 
              : 'bg-white border border-grip-blue/20 text-grip-blue hover:bg-grip-blue/5'
          )}
        >
          Invest Now
          <ArrowRight 
            className={cn(
              'ml-2 h-4 w-4 transition-transform', 
              isHovered && 'group-hover:translate-x-1'
            )} 
          />
        </Button>
      </div>
    </div>
  );
};

export default AssetCard;
